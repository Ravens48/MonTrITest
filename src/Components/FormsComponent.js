import { react, useState } from "react";

function FormsComponent(props) {
  const [values, setValues] = useState({});
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log("changes", values)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.getData(values);
  };
  return (
    <div class="my-8">
      <p class="text-2xl">Renseignez une valeur pour chaque champs</p>
      <form onSubmit={handleSubmit}>
        <div class="md:flex md:space-x-8">
          <input
            class="shadow appearance-none border rounded-lg w-38 h-12 py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="value1"
            type="number"
            placeholder="0"
            value={values.v1}
            name="v1"
            onChange={handleChange}
            required
          />
          <input
            class="shadow appearance-none border rounded-lg w-38 h-12 py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="value1"
            type="number
          "
            placeholder="0"
            value={values.v2}
            name="v2"
            onChange={handleChange}
            required
          />
        </div>
        <div class>
          <button
            type="submit"
            class="bg-yellow-500 text-white px-6 py-2 w-52 h-12 rounded-lg font-medium hover:bg-yellow-600 transition duration-200 each-in-out disabled:opacity-50"
            disabled={values && values.v2 ? false :true}>
            Visualiser
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormsComponent;
