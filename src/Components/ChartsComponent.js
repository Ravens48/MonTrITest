import Chart from "react-google-charts";

function ChartsComponent() {
  return (
    <div>
      <Chart
        width={"600px"}
        height={"600px"}
        chartType="PieChart"
        loader={<div> Loading Chart </div>}
        data={[
          ["Input", "Values"],
          ["Value1", 10],
          ["Value2", 90],
        ]}
        options={{
          title: "Valeurs de vos champs",
          pieHole: 0.4,
          slices: {
            0: { color: "orange" },
            1: { color: "gray" },
          },
        }}
        rootProps={{ "data-testid": "3" }}
      />
    </div>
  );
}

export default ChartsComponent;
