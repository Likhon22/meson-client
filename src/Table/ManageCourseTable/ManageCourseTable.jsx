import { MdDelete } from "react-icons/md";
const ManageCourseTable = ({ courseData, index, refetch }) => {
  return (
    <tr className="text-center">
      <th>{index + 1}</th>
      <th>
        <img className="w-24 rounded h-24" src={courseData?.image} alt="" />
      </th>
      <th className="capitalize">{courseData?.title}</th>

      <th className="capitalize">{courseData?.type}</th>
      <th>
        <button
          className="btn btn-sm bg-green-500 text-white border-none hover:bg-green-700"
          //   onClick={() => openModal(courseData)}
        >
          Update
        </button>
      </th>
      <th>
        <button
          //   onClick={() => handleDeleteUser(userData?.email)}
          className="btn btn-sm text-red-500 text-lg"
        >
          <MdDelete></MdDelete>
        </button>
      </th>
    </tr>
  );
};

export default ManageCourseTable;
