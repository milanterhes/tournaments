import { IMatch, ITeam } from "../components/presentational/Match";

interface Result {
  participants: {
    id: Number;
    place: Number;
    points: Number[];
  }[];
  beginAt: string;
}

interface Contestant {
  id: Number;
  seed: Number;
  status: String;
  alias: String;
  name: String;
  region: String | null;
}

const findContestant = (
  id: Number,
  contestants: Contestant[]
): Contestant | undefined => contestants.find((c) => c.id === id);

const mapResultsToMatch = (
  result: Result,
  contestants: Contestant[]
): IMatch => {
  const teams: ITeam[] = result.participants.map((p) => ({
    name: findContestant(p.id, contestants)?.name || "Tournament",
    points: p.points[0],
    winner: p.place === 1,
  }));

  return {
    time: new Date(result.beginAt),
    team1: teams[0],
    team2: teams[1],
  };
};

export default mapResultsToMatch;
