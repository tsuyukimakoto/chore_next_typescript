import useSWR from "swr";

import { datetimeUrl } from "../../constants/accessUrl";

function MyCurrentData2() {
  const { data, error } = useSWR(datetimeUrl);

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
