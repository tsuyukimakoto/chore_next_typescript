import { Heading } from "@chakra-ui/react";

import MyCurrentData1 from "../components/MyCurrentData1";
import MyCurrentData2 from "../components/MyCurrentData2";
import MyCurrentDataUpdate from "../components/MyCurrentDataUpdate";

function HomePage() {
  return (
    <div>
      <MyCurrentData1 />
      <MyCurrentData1 />
      <MyCurrentData2 />
      <MyCurrentDataUpdate />
    </div>
  );
}

export default HomePage;
