import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function MyCurrentData2() {
  const { data, error } = useSWR(
    "https://qv9hzcvy8g.execute-api.ap-northeast-1.amazonaws.com/datetime",
    fetcher
  );

  if (error) {
    console.log(error);
    return <div>failed to load</div>;
  }
  if (!data) return <div>loading...</div>;
  return (
    <div>
      <p>TimeZone: {data.tz}</p>
      <p>Current time: {data.datetime}</p>
    </div>
  );
}

export default MyCurrentData2;
