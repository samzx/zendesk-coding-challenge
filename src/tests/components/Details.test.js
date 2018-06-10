import { toReadableTime } from "../../components/Details";

test("time becomes more readable", () => {
  const readable = toReadableTime("2018-06-07T13:13:19Z");
  expect(readable).toEqual("Thu Jun 07 2018 23:13:19 GMT+1000 (AEST)");
});
