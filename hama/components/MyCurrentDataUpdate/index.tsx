import { Button } from "@chakra-ui/react";
import useSWRConfig from "swr";
import { datetimeUrl } from "../../constants/accessUrl";

function MyCurrentDataUpdate() {
  const { mutate } = useSWRConfig(datetimeUrl);

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
