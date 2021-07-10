import apidata from '../../../components/data';

export default function handler(req, res){
  const {
    query: {params: [id, item]}
  } = req;

  if(id >= apidata.length || id < 0){
    console.log("id not found");
    res.status(400).send("bad id");
    return;
  }
  const result = {id: id, item: apidata[id][item]};

  console.log(result)
  res.json(result);
}