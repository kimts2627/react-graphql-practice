import { useQuery, gql } from '@apollo/client';
import './App.css';

const EXCHANGE_RATES = gql`
	query GetExchangeRates {
		rates(currency: "USD") {
			currency
			rate
		}
	}
`;

function App() {
	const { loading, error, data } = useQuery(EXCHANGE_RATES);

	if (loading)
		return (
			<div className="App">
				<p>Loading...</p>
			</div>
		);
	if (error)
		return (
			<div className="App">
				<p>Error :(</p>
			</div>
		);
	return (
		<div className="App">
			{data.rates.map(({ currency, rate }) => (
				<div key={currency}>
					<p>
						{currency}: {rate}
					</p>
				</div>
			))}
		</div>
	);
}

export default App;
