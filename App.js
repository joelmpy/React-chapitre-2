import React, { useEffect } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";

    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (response) {
        let listItem = response.map((country) => {
          return { name: country.name.common, capital: country.capital, image : country.flags.png };
        });
        setCountries(listItem);
      });
  }, []);

  return (
    <View>
      <Text>Salut a tous ici Konexio</Text>
      <Text>{JSON.stringify(countries.length)}</Text>
      <FlatList
        data={countries}
        renderItem={(item) => {
          return (
            <View>
              <Text>{item.item.name}</Text>
              <Text>{item.item.capital}</Text>
              <Image style= { {width : 100, height : 100 }} source={item.item.image}/>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
}

export default App;
