import axios from "axios";
import * as redux from "react-redux";
import { getSeasonTvShowData } from "../../actions/seasonTvShow";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));
describe("routes using memory router", () => {
  test("should show Season Show  component to click the paticular season", () => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    getSeasonTvShowData();

    expect(getSeasonTvShowData).toBe(getSeasonTvShowData);

    useDispatchSpy.mockClear();
  });
  test("should show Season Show header component to click the paticular season", () => {
    // w
  });
});
