module.exports = {
  dev:{
      connectionString : "bolt://localhost:7687",
      neo4jUsr:"neo4j",
      neo4jPwd:"Qwerty@123",
  },
  prod:{
    connectionString : "bolt://ec2-54-158-242-50.compute-1.amazonaws.com:7687",
    neo4jUsr:"neo4j",
    neo4jPwd:"Qwerty@123",
  }
};
