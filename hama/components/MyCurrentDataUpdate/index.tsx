import { Button } from "@chakra-ui/react";
import useSWRConfig from "swr";

function MyCurrentDataUpdate() {
  const { mutate } = useSWRConfig(
    "https://qv9hzcvy8g.execute-api.ap-northeast-1.amazonaws.com/datetime"
  );

  return (
    <Button
      onClick={() => {
        mutate("/api/user");
      }}
    >
      更新
    </Button>
  );
}

export default MyCurrentDataUpdate;
