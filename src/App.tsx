import './App.css'
import { SquareGrowth, CubeGrowth, LogGrowth, Context} from "./StrategyGrowth.ts";
import {selectGrowthStrategy, squareGrowth, cubeGrowth, logGrowth} from "./StrategyGrowthFunction.ts"

function App() {
  const growthRate: number = 122;
  const myGrowthAlgorithm: Context = new Context();
  myGrowthAlgorithm.setGrowthAlgorithm = new SquareGrowth();

  return (
    <>
      <div>
        <h2>Comparing the the different growth rates for a start of {growthRate}</h2>
        <b>Object-Oriented Approach (Classes)</b>
        <br />
        The square growth is <b> {myGrowthAlgorithm.run(growthRate)} </b>
        <br />
        {myGrowthAlgorithm.setStrategyGrowth(new CubeGrowth())}
        The cube growth is <b> {myGrowthAlgorithm.run(growthRate)} </b>
        <br />
        {myGrowthAlgorithm.setStrategyGrowth(new LogGrowth())}
        The log growth is <b> {myGrowthAlgorithm.run(growthRate)} </b>
        <hr />

        <b>Functional Programming Approach</b>
        <br />The square growth is <b> { selectGrowthStrategy(squareGrowth, growthRate) } </b>
        <br />The cube growth is <b> { selectGrowthStrategy(cubeGrowth, growthRate)} </b>
        <br />The log growth is <b> { selectGrowthStrategy(logGrowth, growthRate) } </b>
      </div>
    </>
  )
}

export default App
