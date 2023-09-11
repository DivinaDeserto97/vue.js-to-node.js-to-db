<script>
import axios from "axios";

export default {
  data() {
    return {
      data: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/api/data")
      .then((response) => {
        this.data = response.data;
      })
      .catch((error) => {
        console.error("Fehler beim Abrufen der Daten:", error);
      });
  },
};
</script>

<template>
  <pre>{{ JSON.stringify(data, null, 2) }}</pre>
  <div>
    <table v-if="data.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data" :key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
