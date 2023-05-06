import React from "react";

interface TestHookHarnessProps {
  callback: () => void;
}

export const TestHookHarness: React.FC<TestHookHarnessProps> = (props) => {
  props.callback();
  return <></>;
};
