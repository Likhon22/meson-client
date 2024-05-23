import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import {
  deleteExamById,
  deleteQuestionByIds,
  getExamById,
  getQuestionByExamId,
} from "../../../Utils/exam";
import Instructions from "./Instructions";
import { useQuery } from "@tanstack/react-query";
import DashboardContainer from "../../../Components/Dashboard/DashboardContainer/DashboardContainer";
import "./quizStyle.css";
import Loader from "../../../Components/Loader/Loader";
import { addReport } from "../../../Utils/reports";
import useAuth from "../../../hooks/useAuth";
import { saveQuizForQuizCourse } from "../../../Utils/practiceExam";

const WriteExam = () => {
  const [examData, setExamData] = useState(null);
  const [questions = [], setQuestions] = React.useState([]);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = React.useState(0);
  const [selectedOptions, setSelectedOptions] = React.useState({});
  const [result = {}, setResult] = React.useState({});
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [view, setView] = useState("instructions");
  const [secondsLeft = 0, setSecondsLeft] = useState(0);
  const [timeUp, setTimeUp] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const { user } = useAuth();

  const {
    data = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["exam", params.id],
    queryFn: async () => {
      const response = await getExamById(params.id);
      return response[0] || {};
    },
  });
  const {
    data: questionData,
    isLoading: questionLoading,
    refetch,
  } = useQuery({
    queryKey: ["question", params.id],
    queryFn: async () => {
      const response = await getQuestionByExamId(params.id);
      return response;
    },
  });

  useEffect(() => {
    // Update state when 'data' changes
    if (data) {
      setExamData(data);
      setSecondsLeft(data.duration);
    }
  }, [data]);
  useEffect(() => {
    setQuestions(questionData);
  }, [questionData]);

  const calculateResult = async () => {
    try {
      let correctAnswers = [];
      let wrongAnswers = [];

      const practiceQuestionInfo = {
        quizCourseInfo: { ...data },
        quizQuestion: [...questionData],
      };

      questions.forEach((question, index) => {
        if (question.correctOption === selectedOptions[index]) {
          correctAnswers.push(question);
        } else {
          wrongAnswers.push(question);
        }
      });

      let verdict = "Pass";
      if (correctAnswers.length < examData.passingMarks) {
        verdict = "Fail";
      }

      const tempResult = {
        correctAnswers,
        wrongAnswers,
        verdict,
      };
      setResult(tempResult);
      const practiceResponse = await saveQuizForQuizCourse(
        practiceQuestionInfo
      );

      dispatch(ShowLoading());
      const response = await addReport({
        exam: params.id,
        result: tempResult,
        user: user.email,
      });
      dispatch(HideLoading());
      if (response) {
        setView("result");
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const startTimer = () => {
    let totalSeconds = examData.duration;
    const intervalId = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds = totalSeconds - 1;
        setSecondsLeft(totalSeconds);
      } else {
        setTimeUp(true);
      }
    }, 1000);
    setIntervalId(intervalId);
  };

  useEffect(() => {
    if (timeUp && view === "questions") {
      clearInterval(intervalId);
      calculateResult();
    }
  }, [timeUp]);

  const deleteExam = async () => {
    const ids = questionData?.map((question) => question?._id);
    console.log(ids);
    const practiceDelete = await deleteQuestionByIds(ids);
    console.log(practiceDelete);
    refetch();
  };

  return (
    <DashboardContainer>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          {examData && (
            <div className="mt-2">
              <div className="divider"></div>
              <h1 className="text-center">{examData.name}</h1>
              <div className="divider"></div>

              {view === "instructions" && (
                <Instructions
                  examData={examData}
                  setView={setView}
                  startTimer={startTimer}
                />
              )}

              {view === "questions" && (
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <h1 className="text-2xl">
                      {selectedQuestionIndex + 1} :{" "}
                      {questions[selectedQuestionIndex]?.name}
                    </h1>

                    <div className="timer mb-12">
                      <span className="text-2xl bg-blue-600 p-2 ml-12 rounded-md text-white">
                        {secondsLeft}
                      </span>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-2">
                    {Object.keys(questions[selectedQuestionIndex]?.options).map(
                      (option, index) => {
                        return (
                          <div
                            className={`flex gap-2 flex-col ${
                              selectedOptions[selectedQuestionIndex] === option
                                ? "selected-option"
                                : "option"
                            }`}
                            key={index}
                            onClick={() => {
                              setSelectedOptions({
                                ...selectedOptions,
                                [selectedQuestionIndex]: option,
                              });
                            }}
                          >
                            <h1 className="text-xl">
                              {option} :{" "}
                              {
                                questions[selectedQuestionIndex]?.options[
                                  option
                                ]
                              }
                            </h1>
                          </div>
                        );
                      }
                    )}
                  </div>

                  <div className="flex justify-between">
                    {selectedQuestionIndex > 0 && (
                      <button
                        className="btn bg-black btn-sm  text-white mt-4 hover:bg-gray-600"
                        onClick={() => {
                          setSelectedQuestionIndex(selectedQuestionIndex - 1);
                        }}
                      >
                        Previous
                      </button>
                    )}

                    {selectedQuestionIndex < questions.length - 1 && (
                      <button
                        className="btn bg-black btn-sm  text-white mt-4 hover:bg-gray-600"
                        onClick={() => {
                          setSelectedQuestionIndex(selectedQuestionIndex + 1);
                        }}
                      >
                        Next
                      </button>
                    )}

                    {selectedQuestionIndex === questions.length - 1 && (
                      <button
                        className="btn btn-primary btn-sm  text-white mt-4 "
                        onClick={() => {
                          clearInterval(intervalId);
                          setTimeUp(true);
                        }}
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </div>
              )}

              <div>
                {view === "result" && (
                  <div className="flex  items-center mt-2 justify-center result">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-2xl">RESULT</h1>
                      <div className="divider"></div>
                      <div className="marks">
                        <h1 className="text-md">
                          Total Marks : {examData?.totalMarks}
                        </h1>
                        <h1 className="text-md">
                          Obtained Marks :{result?.correctAnswers?.length}
                        </h1>
                        <h1 className="text-md">
                          Wrong Answers : {result?.wrongAnswers?.length}
                        </h1>
                        <h1 className="text-md">
                          Passing Marks : {examData?.passingMarks}
                        </h1>
                        <h1 className="text-md">VERDICT :{result?.verdict}</h1>

                        <div className="flex gap-2 mt-2">
                          <button
                            className="btn bg-black btn-sm  text-white mt-4 hover:bg-gray-600"
                            onClick={() => {
                              setView("review");
                            }}
                          >
                            Review Answers
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="lottie-animation">
                      {result.verdict === "Pass" && (
                        <lottie-player
                          src="https://assets2.lottiefiles.com/packages/lf20_ya4ycrti.json"
                          background="transparent"
                          speed="1"
                          loop
                          autoplay
                        ></lottie-player>
                      )}

                      {result.verdict === "Fail" && (
                        <lottie-player
                          src="https://assets4.lottiefiles.com/packages/lf20_qp1spzqv.json"
                          background="transparent"
                          speed="1"
                          loop
                          autoplay
                        ></lottie-player>
                      )}
                    </div>
                  </div>
                )}

                {view === "review" && (
                  <div className="flex flex-col gap-2">
                    {questions.map((question, index) => {
                      const isCorrect =
                        question?.correctOption === selectedOptions[index];
                      return (
                        <div
                          className={`
                  flex flex-col gap-1 p-2 ${
                    isCorrect ? "bg-success" : "bg-error"
                  }
                `}
                          key={index}
                        >
                          <h1 className="text-xl">
                            {index + 1} : {question?.name}
                          </h1>
                          <h1 className="text-md">
                            Submitted Answer : {selectedOptions[index]} -{" "}
                            {question?.options[selectedOptions[index]]}
                          </h1>
                          <h1 className="text-md">
                            Correct Answer : {question?.correctOption} -{" "}
                            {question?.options[question?.correctOption]}
                          </h1>
                        </div>
                      );
                    })}

                    <div className="flex justify-center gap-2">
                      <Link to={"/my-courses"}>
                        {" "}
                        <button
                          className="btn bg-black btn-sm  text-white mt-4 hover:bg-gray-600"
                          onClick={() => {
                            navigate("/my-courses");
                          }}
                        >
                          Close
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </DashboardContainer>
  );
};

export default WriteExam;
