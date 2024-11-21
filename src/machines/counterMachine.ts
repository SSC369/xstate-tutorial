import { assign, setup } from "xstate";

const counterMachine = setup({
  actions: {
    INACTIVE_START: () => {
      console.log("triggered");
    },
    SUCCESS: () => {
      console.log("Manipulation success!");
    },
    ACTIVE_START: () => {
      console.log("triggered active state entry");
    },
    ACTIVE_END: () => {
      console.log("triggered active state exit");
    },
    INCREMENT_ACTION: assign({
      count: ({ context }: { context: { count: number } }) => context.count + 1,
    }),
    DOUBLE_INCREMENT_ACTION: assign({
      count: ({ context }: { context: { count: number } }) => context.count + 2,
    }),
    RESET_COUNTER: assign({
      count: () => 0,
    }),
  },
  guards: {
    activeGuard: ({ context }: { context: { count: number } }) => {
      return context.count == 9;
    },
    DoubleGuard: ({ context }: { context: { count: number } }) => {
      return context.count == 20;
    },
  },
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QGMD2BXAdgFzAJwDoBDZbASwDcwBiASQDkBhAJQFEBZV+gFQG0AGALqJQAB1Swy5VJhEgAHogDM-fgQAsAJnUBOPboAcO9QYCsAGhABPROoCMpgvwBsr0wHY7dpXufGAvv6WaFi4hCTkVHRMbJw8vHbCSCDiktKyyYoIALSams4EmqaqmjoGWlqeSpY2COrFBEpF-F7u-HoGmu6BwRg4+MSklDQAIqwsHFx8QnKpUmQyclk6BabFJZpKBkbGFtaIdttO7sV2Wko+perqPSAh-YQjAPIAqgBCADKsAMrRE3HTJJiCTzRaZRAGFROdb8dzqZx2E7OPa1dQXAjOXR6HT8SHuYxmW73MIEZ7vL6-Bj-KYJIEpEHpJaIE5KAjuE4tNplHQedw1ZS4xrNTSI2EtJSmIl9Elkz4-ahjanxGbJOaM8EIZzaAgedb2PL8C4GfkIPLqDQc-hFHyqBxS0IDWjfJ4fACC3FY1DwYGw6DwmAEdLVCwyoGWSjsx1Opi8dkxJoMkZUqkNOjyxmc5UCQRAmFQEDgcmJ+FmDJDTJyXXNzStZQqXTsJuyBRTJS2EaUWlMOntD0GkTApbS5Y1CI0Sjhek8htMBk8Jq2al1LUROhORmcvZJZEwEWGQ9BoYUiFM5s6WOcJyqJjWCc0bI5Es7Z02Bk3OeLj1ecu+B-VYcQLUl1MLUY28FpnBNLQ1ERLE2kNA1NC3R1nTdD0-xHACEFje8rXWNclGcfh4WqfY6itDRZwuFpiM7Hxs38IA */
  id: "counter",
  initial: "active",
  context: {
    count: 0,
  },
  states: {
    active: {
      entry: {
        type: "ACTIVE_START",
        params: ({ context }: { context: { count: number } }) => {
          return context;
        },
      },
      exit: [{ type: "ACTIVE_END" }],
      on: {
        INCREMENT: [
          {
            actions: ["INCREMENT_ACTION"],
            target: "DOUBLES",
            guard: "activeGuard",
          },
          {
            //   actions: {
            //     type: "INCREMENT_ACTION",
            //     params: ({ context }: { context: { count: number } }) => context,
            //   },
            actions: ["INCREMENT_ACTION"],
            target: "active",
          },
        ],
        DECREMENT: {
          actions: assign({
            count: ({ context }) => context.count - 1,
          }),
        },
      },
    },
    inactive: {
      entry: [
        {
          type: "INACTIVE_START",
        },
      ],
    },
    DOUBLES: {
      entry: () => {
        console.log("Entered Into DOUBLES state!");
      },
      exit: () => {
        console.log("Exit from DOUBLES state");
      },

      on: {
        INCREMENT: [
          {
            actions: ["DOUBLE_INCREMENT_ACTION"],
            guard: "DoubleGuard",
            target: "ISOLATE",
          },
          {
            actions: ["DOUBLE_INCREMENT_ACTION"],
            target: "DOUBLES",
          },
        ],
        DECREMENT: {
          actions: assign({
            count: ({ context }) => context.count - 1,
          }),
        },
      },
    },
    ISOLATE: {
      entry: () => {
        console.log("Entered Into ISOLATE state!");
      },
      exit: () => {
        console.log("Exit from ISOLATE state");
      },
      on: {
        return: {
          target: "active",
          actions: ["RESET_COUNTER"],
        },
      },
    },
  },
});

export default counterMachine;
