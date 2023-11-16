import { describe, it, expect, beforeEach, vitest } from "vitest";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Hospital } from "@/models/hospital";
import { render, screen, waitFor } from "@testing-library/react";

const hospitalMockData: Hospital[] = [
  {
    id: "65265f0aeaedc2035109e969",
    name: "Chulalongkorn Hospital",
    address: "1873 Rama IV Rd",
    district: "Pathum Wan",
    province: "Bangkok",
    postalcode: "10330",
    tel: "026494000",
    picture: "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
  },

  {
    id: "65265f12eaedc2035109e96c",
    name: "Rajavithi Hospital",
    address: "2 Phaya Thai Rd, Thung Phaya Thai",
    district: "Ratchathewi",
    province: "Bangkok",
    postalcode: "10400",
    tel: "022062900",
    picture: "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
  },
  {
    id: "65265f12eaedc2035109e96c",
    name: "Thammasat University Hospital",
    address: "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
    district: "Khlong Luang",
    province: "Pathum Thani",
    postalcode: "12120",
    tel: "029269999",
    picture: "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
  },
  {
    id: "65426a4d63420668a115d339",
    name: "Vajira Hospital",
    address: "681 Samsen Road",
    district: "Dusit",
    province: "Bangkok",
    postalcode: "10300",
    tel: "02-244-3000",
    picture: "https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP",
  },
];

describe("Hospital Catalog", () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = vitest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it("should have correct number of hosptial image", async () => {
    const hospitalCatalog = await HospitalCatalog({
      hospitals: hospitalMockData,
      ratingMap: {},
    });
    render(hospitalCatalog);
    await waitFor(() => {
      const hospitalImgs = screen.queryAllByRole("img");
      expect(hospitalImgs.length).toBe(hospitalMockData.length);
    });
  });
});
