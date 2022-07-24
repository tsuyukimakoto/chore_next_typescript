import useSWR from "swr";
import axios from "axios";

import { datetimeUrl } from "../../constants/accessUrl";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function MyCurrentData1() {
  const { data, error } = useSWR(datetimeUrl, fetcher);

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

export default MyCurrentData1;
