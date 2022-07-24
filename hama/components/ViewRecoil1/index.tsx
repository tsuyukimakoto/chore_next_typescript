import { Heading } from "@chakra-ui/react";

import { useMyData } from "../../states/myData";

function ViewRecoil1() {
  const [myData] = useMyData();
  return <Heading>{myData}</Heading>;
}

export default ViewRecoil1;
