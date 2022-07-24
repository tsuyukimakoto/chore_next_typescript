import { Button } from "@chakra-ui/react";

import { useMyData } from "../../states/myData";

function MyDataToggler() {
  const [myData, setMyData] = useMyData();
  const toggle = () => {
    if (myData === "default my data") {
      setMyData("modified my data");
    } else {
      setMyData("default my data");
    }
  };

  return <Button onClick={() => toggle()}>toggle</Button>;
}

export default MyDataToggler;
