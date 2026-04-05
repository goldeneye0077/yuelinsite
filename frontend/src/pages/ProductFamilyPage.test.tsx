import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";

import { AppProviders } from "../app/providers";
import { createAppRouter } from "../app/router";
import { getProductTaxonomy } from "../content/products";

describe("ProductFamilyPage", () => {
  it("renders the selected family detail page with shorter subgroup copy and related families", async () => {
    const taxonomy = getProductTaxonomy("zh");
    const industrialSensors = taxonomy.categories[0];
    const router = createAppRouter({
      initialEntries: ["/zh/products/industrial-sensors"],
    });

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    );

    expect(
      (await screen.findAllByText(industrialSensors.name)).length,
    ).toBeGreaterThan(0);
    expect(
      await screen.findByText("覆盖检测与识别方向，适合先从子类判断。"),
    ).toBeInTheDocument();
    expect(await screen.findByText("细分方向")).toBeInTheDocument();
    expect(
      (await screen.findAllByText(taxonomy.subgroupCtaLabel)).length,
    ).toBeGreaterThan(0);
    expect(
      (await screen.findAllByText(taxonomy.categories[1].name)).length,
    ).toBeGreaterThan(0);
    expect(
      (await screen.findAllByText(taxonomy.backToCatalogLabel)).length,
    ).toBeGreaterThan(0);
  });

  it("renders safety family pages with subgroup preview media and deep links", async () => {
    const taxonomy = getProductTaxonomy("zh");
    const safetyFamily = taxonomy.categories[1];
    const router = createAppRouter({
      initialEntries: ["/zh/products/safety-protection-sensors"],
    });

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    );

    expect(
      (await screen.findAllByText(safetyFamily.name)).length,
    ).toBeGreaterThan(0);
    expect((await screen.findAllByText("H3EL 系列")).length).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("link", { name: /光幕与区域传感器/i }).length,
    ).toBeGreaterThan(0);
  });

  it("renders linear guide families with illustrated subgroup previews", async () => {
    const taxonomy = getProductTaxonomy("zh");
    const linearFamily = taxonomy.categories.find(
      (category) => category.key === "linear-guides-and-modules",
    );
    const router = createAppRouter({
      initialEntries: ["/zh/products/linear-guides-and-modules"],
    });

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    );

    expect(linearFamily).toBeDefined();
    expect(
      (await screen.findAllByText(linearFamily!.name)).length,
    ).toBeGreaterThan(0);
    expect(
      (await screen.findAllByText(linearFamily!.groups[0].series[0])).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("link", { name: /线性滑轨/i }).length,
    ).toBeGreaterThan(0);
  });

  it("renders english family pages with polished enterprise tone", async () => {
    const router = createAppRouter({
      initialEntries: ["/en/products/industrial-sensors"],
    });

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    );

    expect(
      await screen.findByText(
        "A structured entry into sensing and identification, starting from the right subgroup.",
      ),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        "Review the subgroup first, then move into series, visuals, and inquiry.",
      ),
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Other Product Families"),
    ).toBeInTheDocument();
  });
});
