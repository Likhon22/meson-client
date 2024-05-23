import { Form, message, Modal, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loaderSlice";
import { addQuestionToExam, editQuestionById } from "../../Utils/exam";

const AddEditQuestion = ({
  showAddEditQuestionModal,
  setShowAddEditQuestionModal,
  refreshData,
  examId,
  selectedQuestion,
  setSelectedQuestion,
  refetchData,
}) => {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const payload = {
        name: values.name,
        correctOption: values.correctOption,
        options: {
          A: values.A,
          B: values.B,
          C: values.C,
          D: values.D,
        },
        exam: examId,
      };

      let response;
      if (selectedQuestion) {
        response = await editQuestionById({
          ...payload,
          questionId: selectedQuestion._id,
        });
      } else {
        response = await addQuestionToExam(payload);
      }

      if (response) {
        message.success("Successful");
        refetchData();
        refreshData();
        setShowAddEditQuestionModal(false);
      } else {
        message.error(response.message);
      }

      setSelectedQuestion(null);
    } catch (error) {
      message.error(error.message);
    } finally {
      dispatch(HideLoading());
    }
  };

  return (
    <Modal
      title={selectedQuestion ? "Edit Question" : "Add Question"}
      visible={showAddEditQuestionModal}
      footer={null}
      onCancel={() => {
        setShowAddEditQuestionModal(false);
        setSelectedQuestion(null);
      }}
    >
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          name: selectedQuestion?.name,
          A: selectedQuestion?.options?.A,
          B: selectedQuestion?.options?.B,
          C: selectedQuestion?.options?.C,
          D: selectedQuestion?.options?.D,
          correctOption: selectedQuestion?.correctOption,
        }}
      >
        <Form.Item
          name="name"
          label="Question"
          rules={[{ required: true, message: "Please input the question!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="correctOption"
          label="Correct Option"
          rules={[
            { required: true, message: "Please input the correct option!" },
          ]}
        >
          <Input />
        </Form.Item>

        <div className="flex gap-3">
          <Form.Item
            name="A"
            label="Option A"
            rules={[{ required: true, message: "Please input option A!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="B"
            label="Option B"
            rules={[{ required: true, message: "Please input option B!" }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex gap-3">
          <Form.Item
            name="C"
            label="Option C"
            rules={[{ required: true, message: "Please input option C!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="D"
            label="Option D"
            rules={[{ required: true, message: "Please input option D!" }]}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="flex justify-end mt-2 gap-3">
          <button
            className="btn btn-sm bg-black text-white "
            onClick={() => setShowAddEditQuestionModal(false)}
          >
            Cancel
          </button>
          <button className="btn btn-sm bg-black text-white " type="submit">
            Save
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddEditQuestion;
