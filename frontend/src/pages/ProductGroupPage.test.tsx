import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";

import { AppProviders } from "../app/providers";
import { createAppRouter } from "../app/router";
import {
  buildRepresentativeProducts,
  getProductTaxonomy,
} from "../content/products";

describe("ProductGroupPage", () => {
  it("renders an industrial sensor subgroup page with shorter copy and sibling navigation", async () => {
    const taxonomy = getProductTaxonomy("zh");
    const group = taxonomy.categories[0].groups[0];
    const products = buildRepresentativeProducts(
      "zh",
      "industrial-sensors",
      "fiber-sensors",
    );
    const router = createAppRouter({
      initialEntries: ["/zh/products/industrial-sensors/fiber-sensors"],
    });

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    );

    expect((await screen.findAllByText(group.name)).length).toBeGreaterThan(0);
    expect(
      await screen.findByText("先看代表系列，再决定是否继续询盘。"),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        "如果当前子类不够准确，可以直接切到同级方向继续看。",
      ),
    ).toBeInTheDocument();
    expect(
      (await screen.findAllByAltText(products[0].imageAlt ?? products[0].title))
        .length,
    ).toBeGreaterThan(0);

    const productButtons = screen.getAllByRole("button", {
      name: new RegExp(products[1].title, "i"),
    });

    fireEvent.click(productButtons[0]);

    expect(
      (await screen.findAllByText(products[1].seriesCode ?? "")).length,
    ).toBeGreaterThan(0);
    expect(
      (await screen.findAllByText(products[1].highlights[0])).length,
    ).toBeGreaterThan(0);
    expect(
      (await screen.findAllByText(products[1].application ?? "")).length,
    ).toBeGreaterThan(0);
    expect(
      screen
        .getAllByRole("button", { name: new RegExp(products[1].title, "i") })
        .some((button) => button.getAttribute("aria-pressed") === "true"),
    ).toBe(true);
  });

  it("renders other industrial sensor subgroup pages with the same visual product pattern", async () => {
    const products = buildRepresentativeProducts(
      "zh",
      "industrial-sensors",
      "photoelectric-sensors",
    );
    const router = createAppRouter({
      initialEntries: ["/zh/products/industrial-sensors/photoelectric-sensors"],
    });

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    );

    expect((await screen.findAllByText("光电传感器")).length).toBeGreaterThan(
      0,
    );
    expect(
      (await screen.findAllByAltText(products[0].imageAlt ?? products[0].title))
        .length,
    ).toBeGreaterThan(0);
    expect((await screen.findAllByText("LS100 系列")).length).toBeGreaterThan(
      0,
    );

    fireEvent.click(
      screen.getAllByRole("button", {
        name: new RegExp(products[1].title, "i"),
      })[0],
    );

    expect((await screen.findAllByText("LS200 系列")).length).toBeGreaterThan(
      0,
    );
    expect(
      (await screen.findAllByText(products[1].highlights[0])).length,
    ).toBeGreaterThan(0);
    expect(
      screen
        .getAllByRole("button", { name: new RegExp(products[1].title, "i") })
        .some((button) => button.getAttribute("aria-pressed") === "true"),
    ).toBe(true);
  });

  it("renders a safety subgroup page with media-rich detail content", async () => {
    const products = buildRepresentativeProducts(
      "zh",
      "safety-protection-sensors",
      "safety-door-lock-switches",
    );
    const router = createAppRouter({
      initialEntries: [
        "/zh/products/safety-protection-sensors/safety-door-lock-switches",
      ],
    });

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    );

    expect((await screen.findAllByText("安全门锁开关")).length).toBeGreaterThan(
      0,
    );
    expect(
      (await screen.findAllByAltText(products[0].imageAlt ?? products[0].title))
        .length,
    ).toBeGreaterThan(0);
    expect((await screen.findAllByText("SDS 系列")).length).toBeGreaterThan(0);
  });

  it("renders project-inferred product groups with the same rich visual detail pattern", async () => {
    const products = buildRepresentativeProducts(
      "zh",
      "pneumatic-components",
      "cylinders",
    );
    const router = createAppRouter({
      initialEntries: ["/zh/products/pneumatic-components/cylinders"],
    });

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    );

    expect((await screen.findAllByText("气缸")).length).toBeGreaterThan(0);
    expect(
      (await screen.findAllByAltText(products[0].imageAlt ?? products[0].title))
        .length,
    ).toBeGreaterThan(0);

    fireEvent.click(
      screen.getAllByRole("button", {
        name: new RegExp(products[1].title, "i"),
      })[0],
    );

    expect(
      (await screen.findAllByText(products[1].highlights[0])).length,
    ).toBeGreaterThan(0);
    expect(
      (await screen.findAllByText(products[1].application ?? "")).length,
    ).toBeGreaterThan(0);
  });

  it("renders inquiry assist blocks for project-inferred product groups and copies the template", async () => {
    const router = createAppRouter({
      initialEntries: ["/en/products/pneumatic-components/cylinders"],
    });

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    );

    expect(
      await screen.findByText("Specs to prepare first"),
    ).toBeInTheDocument();
    expect(await screen.findByText("Bore and stroke")).toBeInTheDocument();
    expect(
      await screen.findByText("Recommended inquiry template"),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Copy template" }));

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalled();
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      expect.stringContaining("Bore and stroke"),
    );
  });
});
