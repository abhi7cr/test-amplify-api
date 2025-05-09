import { defineData } from "@aws-amplify/backend";

const schema = `# This "input" configures a global authorization rule to enable public access to
# all models in this schema. Learn more about authorization rules here: https://docs.amplify.aws/cli/graphql/authorization-rules
input AMPLIFY { globalAuthRule: AuthRule = { allow: public } } # FOR TESTING ONLY!

type Todo @model {
  id: ID!
  name: String!
  description: String
}
`;

export const data = defineData({
    migratedAmplifyGen1DynamoDbTableMappings: [{
            // Replace the environment name (dev) with the corresponding branch name. Use "sandbox" for your sandbox environment.
            branchName: "main",
            modelNameToTableNameMapping: { Todo: "Todo-y5vr22dwsreg3oc75ifttex3ea-dev" }
        }],
    schema
});
