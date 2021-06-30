import Chart from "react-google-charts";

function ChartsComponent(props) {
    let datas = props.takedata;
    console.log(datas);
    const width= window.innerWidth;
    console.log(width);
  return (
    <div class="my-8">
      <Chart
        width={width === 375 ? "350px" : "700px"}
        height={width === 375 ? "350px" : "700px"}
        chartType="PieChart"
        loader={<div> Loading Chart </div>}
        data={[
          ["Input", "Values"],
          ["Value1", parseInt(datas.v1)],
          ["Value2", parseInt(datas.v2)],
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
