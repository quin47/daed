import { Button, HStack, List, ListItem } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";

import { graphql } from "~/gql";
import { endpointURL } from "~/store";

export default () => {
  const { data: configQueryData } = useQuery(["configs"], async () =>
    request(
      endpointURL.get(),
      graphql(/* GraphQL */ `
        query Configs {
          configs {
            selected
          }
        }
      `)
    )
  );

  return (
    <HStack>
      <List>
        {configQueryData?.configs.map((config, i) => (
          <ListItem key={i}>{JSON.stringify(config)}</ListItem>
        ))}
      </List>

      <Button
        onClick={() => {
          // TODO:
        }}
      >
        Add
      </Button>
    </HStack>
  );
};
