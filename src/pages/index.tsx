import { useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import { Container, Content, SearchInput } from "../styles/pages/home";

export default function Home() {
	const router = useRouter();
	const [summonerName, setSummonerName] = useState("");

	return (
		<>
			<Head>
				<title>Home | LoL</title>
			</Head>
			<Container>
				<Content>
					<SearchInput>
						<input
							type="text"
							placeholder="Digite um nickname para ser procurado."
							value={summonerName}
							onChange={(event) => setSummonerName(event.target.value)}
						/>
						<button onClick={() => router.push(`/summoner/${summonerName}`)}>
							<span>Procurar</span>
						</button>
					</SearchInput>
				</Content>
			</Container>
		</>
	);
}
