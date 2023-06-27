import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import matchersTestingLibrary from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";
import { cleanup } from "@testing-library/react";

declare module "vitest" {
  interface Assertion<T = any>
    extends jest.Matchers<void, T>,
      TestingLibraryMatchers<T, void> {}
}

expect.extend(matchersTestingLibrary);

// We can reset the localStorage and sessionStorage here to PASS all cases in stryker
// But for more complex project, it's really hard to reset all environment
// localStorage.clear();
// sessionStorage.clear();
// afterEach(() => {
//   cleanup();
// });
