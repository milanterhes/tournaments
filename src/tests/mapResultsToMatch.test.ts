import mapResultsToMatch from "../utils/mapResultsToMatch";

const testContestants = [
  {
    id: 12483873,
    seed: 0,
    status: "signedUp",
    alias: "12483873",
    name: "Deleted account",
    region: null,
  },
  {
    id: 12274969,
    seed: 3,
    status: "checkedIn",
    alias: "12274969",
    name: "Deleted account",
    region: null,
  },
  {
    id: 12471748,
    seed: 2,
    status: "checkedIn",
    alias: "12471748",
    name: "KillaBeez",
    region: "ES",
  },
  {
    id: 12091998,
    seed: 1,
    status: "checkedIn",
    alias: "12091998",
    name: "RedLynX",
    region: "ES",
  },
  {
    id: 11151290,
    seed: 4,
    status: "checkedIn",
    alias: "11151290",
    name: "Deleted account",
    region: null,
  },
];

const testResult = {
  id: 36063872,
  state: "closed",
  bracket: 1,
  round: 1,
  position: 1,
  participants: [
    {
      id: 12471748,
      place: 2,
      points: [0],
    },
    {
      id: 11151290,
      place: 1,
      points: [2],
    },
  ],
  beginAt: "2018-06-29T17:00:00.000Z",
};

describe("mapResultsToMatch", () => {
  it("maps match correctly", () => {
    const result = mapResultsToMatch(testResult, testContestants);
    expect(result).toEqual({
      time: new Date("2018-06-29T17:00:00.000Z"),
      team1: { name: "KillaBeez", points: 0, winner: false },
      team2: { name: "Deleted account", points: 2, winner: true },
    });
  });
});
