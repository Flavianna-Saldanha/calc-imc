"use client"

import styles from './Page.module.css';
import Image from "next/image";
import powered from "@/src/assets/powered.png";
import { useState } from 'react';
import { GridItem } from '@/src/components/GridItem/gridItem';
import leftArrowImage from '@/src/assets/leftarrow.png';
import { levels, calculateImc, Level } from '@/src/helpers/imc';


const Page = () => {
	const [heightField, setHeightField] = useState<number>(0);
	const [weightField, setWeightField] = useState<number>(0);
	const [toShow, setToShow] = useState<Level | null>(null);

	const handleCalculateButton = () => {
		if(heightField && weightField) {
			setToShow(calculateImc(heightField, weightField));
		} else {
			alert("Digite todos os campos.");
		}
	}

	const handleBackButton = () => {
		setToShow(null);
		setHeightField(0);
		setWeightField(0);
	}

	return (
		<div className={styles.main}>
			<header>
				<div className={styles.headerContainer}>
					<Image
						src={powered}
						width={200}
						height={100}
						alt="Powered"
					/>
				</div>
			</header>
			<div className={styles.container}>
				<div className={styles.leftSide}>
					<h1>Calcule o seu IMC.</h1>
					<p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
				
					<input
						type="number"
						placeholder="Digite a sua altura. Ex: 1.5 (em métros)"
						value={heightField > 0 ? heightField: ''}
						onChange={e => setHeightField(parseFloat(e.target.value))}
					/>
					<input
						type="number"
						placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
						value={weightField > 0 ? weightField: ''}
						onChange={e => setWeightField(parseFloat(e.target.value))}
					/>

					<button onClick={handleCalculateButton}>Calcular</button>
				</div>
				<div className={styles.rightSide}>
					{!toShow &&
					<div className={styles.grid}>
						{levels.map((item, key) => (
							<GridItem key={key} item={item} />
						))}
					</div>
					}
					{toShow &&
						<div className={styles.rightBig}>
							<div className={styles.rightArrow} onClick={handleBackButton}>
								<Image
									src={leftArrowImage}
									width={20}
									alt="left Arrow Image"
								/>
							</div>
							<GridItem item={toShow}/>
						</div>
					}
				</div>
			</div>
		</div>
	);
}

export default Page;