import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";

import { AppProviders } from "../app/providers";
import { createAppRouter } from "../app/router";
import { getSiteContent } from "../content/site";

describe("HomeShellPage", () => {
  it("routes homepage inquiry entry points into contact with source context", async () => {
    const content = getSiteContent("zh");
    const router = createAppRouter({
      initialEntries: ["/zh"],
    });

    const { container } = render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    );

    const inquiryLinks = await screen.findAllByRole("link", {
      name: content.home.primaryCta,
    });

    expect(
      inquiryLinks.some(
        (link) =>
          link.getAttribute("href") ===
          "/zh/contact?category=general-consultation&source=home",
      ),
    ).toBe(true);

    expect(
      screen.getByRole("heading", { level: 1, name: content.meta.brandName }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(content.meta.companyName).length,
    ).toBeGreaterThan(0);
    expect(screen.getByText("为什么联系跃鳞科技")).toBeInTheDocument();
    expect(
      screen.getByText("如果方向已明确，下一步就进入咨询"),
    ).toBeInTheDocument();
    expect(
      container.querySelector(".surface-media-card__image"),
    ).toBeInTheDocument();
    expect(
      container.querySelector(".home-hero__poster"),
    ).not.toBeInTheDocument();
  });
});
