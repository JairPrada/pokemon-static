import type { NextPage } from "next";
import { Button, Text } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import Image from "next/image";
interface Pokemons {
  name: string;
  url: string;
}

const HomePage: NextPage = ({ pokemons }) => {
  return (
    <Layout title="Listado De Pokemons">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
          margin: "10px 20px",
          boxSizing: "border-box",
        }}
      >
        {pokemons?.map((pokemon: Pokemons, index: number) => (
          <div
            key={pokemon.name}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              backgroundColor: "#121112",
              padding: "10px 15px",
            }}
          >
            <Image
              width={100}
              height={100}
              alt="Pokemon"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Text>{pokemon?.name}</Text>
              <Text>#{index + 1}</Text>
            </div>
          </div>
        ))}
        <Button>Ver Mas</Button>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await res.json();
  return {
    props: {
      name: "Jair",
      pokemons: data.results,
    },
  };
};

export default HomePage;
