import Home from '../pages';
import MyApp from '../pages/_app';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';


declare const window: Window &
  typeof globalThis & {
    dataLayer: { push: jest.Mock<any, any> };
  };

window.dataLayer = {
  push: jest.fn(),
};

const useRouter = jest
  .spyOn(require("next/router"), "useRouter")
  .mockImplementation(() => {
    return {
      events: {
        on: jest.fn((event, callback) => {
          eventName = event;
          routeChangeHandler = callback;
        }),
        off: jest.fn((event, callback) => {
          eventName = event;
          routeChangeHandler = callback;
        }),
      },
    };
  });

let eventName;
let routeChangeHandler;

describe("pages/__app.tsx", () => {
  it("should watch for page changes needed for Google Tag Manager", async () => {
    render(<MyApp Component={Home} router={undefined} pageProps={undefined} />);
    expect(useRouter).toHaveBeenCalledTimes(1);
    expect(eventName).toBe("routeChangeComplete");
    expect(routeChangeHandler).toBeDefined();
    expect(routeChangeHandler("/")).toBe(undefined);
    // @ts-expect-error useRouter is a mock
    useRouter().events.on("onEvent", routeChangeHandler);
    expect(useRouter).toHaveBeenCalledTimes(2);
    expect(eventName).toBe("onEvent");
    // @ts-expect-error useRouter is a mock
    useRouter().events.off("offEvent", routeChangeHandler);
    expect(useRouter).toHaveBeenCalledTimes(3);
    expect(eventName).toBe("offEvent");
  });
});
