import Link from "next/link";
import React, { FC } from "react";
import { Text } from "@nextui-org/react";
import Image from "next/image";

interface route {
  href: string;
  text: string;
}
interface NavBarProps {
  routes: route[];
}

export const NavBar: FC<NavBarProps> = ({ routes }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        padding: "10px 60px 10px 20px",
        boxSizing: "border-box",
        backgroundColor: "rgb(9, 9, 9)",
      }}
    >
      <Image
        width={120}
        height={120}
        alt="Pokemon"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      />
      <Text h1 size={60} weight="bold">
        P
      </Text>
      <Text h2 size={40} weight="bold">
        okemon
      </Text>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          boxSizing: "border-box",
          gap: "20px",
        }}
      >
        {routes.map((route) => (
          <Link key={route.text} href={route.href}>
            {route.text}
          </Link>
        ))}
      </div>
    </div>
  );
};
