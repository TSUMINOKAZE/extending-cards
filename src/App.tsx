import { FC, useState } from 'react';
import './styles/app.scss';
import { data } from './data';

const App: FC = () => {
	const [extended, setExtended] = useState<number>(0);

	return (
		<div className='container'>
			{data.map((card, idx) => (
				<div
					key={idx}
					className={`card${idx === extended ? ' extended' : ''}`}
					onClick={() => setExtended(idx)}
				>
					<img src={card.image} alt={card.title} />
					<span>{card.title}</span>
				</div>
			))}
		</div>
	);
};

export default App;
