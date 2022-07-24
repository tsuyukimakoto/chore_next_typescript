import { Heading } from "@chakra-ui/react";

import ViewRecoil1 from "../components/ViewRecoil1";
import ViewRecoil2 from "../components/ViewRecoil1";
import MyDataToggler from "../components/MyDataToggler";

function HomePage() {
  return (
    <div>
      <MyDataToggler />
      <ViewRecoil1 />
      <ViewRecoil2 />
    </div>
  );
}

export default HomePage;
