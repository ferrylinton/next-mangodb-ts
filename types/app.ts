import { NextComponentType, NextPage, NextPageContext } from "next";
import PublicLayout from "@/components/layout/PublicLayout";
import SecureLayout from "@/components/layout/SecureLayout";
import { AppProps } from "next/app";

export const Layouts = {
  PublicLayout,
  SecureLayout,
};

export type LayoutKeys = keyof typeof Layouts;

export type LayoutPage<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: LayoutKeys;
};


export type LayoutAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, any, any> & {
    Layout: LayoutKeys;
  };
};
