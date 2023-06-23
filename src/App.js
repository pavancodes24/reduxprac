import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getuserData } from "./redux/action";
export default function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.count);
  const { data, isLoading, isError } = useSelector((state) => state.requres);
  console.log(data, isLoading, isError);

  useEffect(() => {
    dispatch(getuserData());
  }, []);
  if (isLoading) {
    return <>...loading</>;
  }

  if (isError) {
    return <>... something went wrong</>;
  }
  return (
    <div className="App">
      <div>Redux Practise</div>
      <div>data</div>
      <table>
        <tr>
          <th>id</th>
          <th>email</th>
          <th>first Name</th>
          <th>last Name</th>
          <th>Avatar</th>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>
              <img src={item.avatar} alt="" />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
