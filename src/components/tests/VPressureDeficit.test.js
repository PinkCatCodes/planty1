import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import VPDContainer from "../parameters/VPD/VPDContainer";
import ErrorBoundary from "./ErrorBoundary";

jest.mock("axios");

const mockAxiosResponse = {
  data: {
    thresholds: [
      {
        type: "vpd",
        warningMax: 80,
        warningMin: 20,
        max: 100,
        min: 10,
      },
    ],
    light: 10,
  },
};

describe("VPDontainer component data fetching", () => {
  beforeEach(() => {
    // Mock axios.get for fetchData function
    axios.get.mockResolvedValue(mockAxiosResponse);
  });

  test("fetches data from the correct endpoint", async () => {
    render(
      <ErrorBoundary>
        <VPDContainer />
      </ErrorBoundary>
    );

    // Wait for the component to call axios.get and process the data
    await waitFor(() => expect(axios.get).toHaveBeenCalled());

    // Check if axios.get was called with the correct URL
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:5021/Plants/thresholds"
    );

    //the old

    it("sets danger thresholds correctly", async () => {
      render(<VPDContainer />);
      axios.patch.mockResolvedValueOnce({});

      fireEvent.change(screen.getByPlaceholderText("Enter Upper Level"), {
        target: { value: "90" },
      });
      fireEvent.change(screen.getByPlaceholderText("Enter Lower Level"), {
        target: { value: "15" },
      });
      fireEvent.click(screen.getByText("Set Upper"));
      fireEvent.click(screen.getByText("Set Lower"));

      expect(axios.patch).toHaveBeenCalledWith(
        "http://localhost:5021/Plants/thresholds",
        {
          type: "vpd",
          warningMax: 80,
          warningMin: 20,
          max: 90,
          min: 15,
        }
      );
      await waitFor(() => expect(axios.patch).toHaveBeenCalledTimes(2));
    });

    it("sets warning thresholds correctly", async () => {
      render(<VPDContainer />);
      axios.patch.mockResolvedValueOnce({});

      fireEvent.change(screen.getByRole("Enter Upper Level")[0], {
        target: { value: "70" },
      });
      fireEvent.change(screen.getByRole("Enter Lower Level")[0], {
        target: { value: "25" },
      });
      fireEvent.click(screen.getAllByText("Set Upper")[0]);
      fireEvent.click(screen.getAllByText("Set Lower")[0]);

      expect(axios.patch).toHaveBeenCalledWith(
        "http://localhost:5021/Plants/thresholds",
        {
          type: "vpd",
          warningMax: 70,
          warningMin: 25,
          max: 100,
          min: 10,
        }
      );
      await waitFor(() => expect(axios.patch).toHaveBeenCalledTimes(2));
    });

    it("toggles upper notification correctly", async () => {
      render(<VPDContainer />);
      axios.post.mockResolvedValueOnce({});

      fireEvent.click(screen.getAllByRole("checkbox")[0]);

      expect(axios.post).toHaveBeenCalledWith(
        "http://192.168.156.250:5021/Plants/1/vaporPressureDeficit",
        {
          upperEnabled: true,
          lowerEnabled: false,
        }
      );
      await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
    });

    it("toggles lower notification correctly", async () => {
      render(<VPDContainer />);
      axios.post.mockResolvedValueOnce({});

      fireEvent.click(screen.getAllByRole("checkbox")[1]);

      expect(axios.post).toHaveBeenCalledWith(
        "http://192.168.156.250:5021/Plants/1/vaporPressureDeficit",
        {
          upperEnabled: false,
          lowerEnabled: true,
        }
      );
      await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
    });
  });
});
