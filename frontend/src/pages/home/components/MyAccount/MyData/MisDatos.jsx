import React, { useEffect } from "react";
import { useState } from "react";
import { MyDataStyle } from "../../../styled-components/MyAccountComponent";
import {
  useAddNewDataUserMutation,
  useGetUserInfoQuery,
  useGetAddressInfoQuery,
} from "../../../../../redux/query/FoodInfo.query";
import { Loader } from "../../../../../components";
import axios from "axios";

export default function MisDatos() {
  const [id, setId] = useState([]);
  const [token, setToken] = useState([]);
  const [res, setRes] = useState([]);

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("id"));
    if (id) {
      setId(id);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setToken(token);
    }
    axios.get(`http://localhost:8080/api/addresses/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setRes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(res);

  const { data: post, isFetching, isSuccess } = useGetUserInfoQuery(id);
  // const { data: ready, isProccess, isReady } = useGetAddressInfoQuery(token);
  const [addNewDataUser, { isLoading }] = useAddNewDataUserMutation();
  const canSave = !isLoading;

  const [NameAndSurname, setNameAndSurname] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [location, setLocation] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [floor, setFloor] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [moreDetails, setmoreDetails] = useState("");

  // setTimeout(() => {
  //   setNameAndSurname(post.name);
  // }, [5000]);

  useEffect(() => {
    setNameAndSurname(post?.name);
    setEmail(post?.email);
    setPostalCode(res?._embedded?.addresses[0].zipCode);
    setLocation(res?._embedded?.addresses[0].city);
    setStreet(res?._embedded?.addresses[0].street);
    setNumber(res?._embedded?.addresses[0].number);
    // OJO
    setFloor(res?._embedded?.addresses[0].country);
    setContact(res?._embedded?.addresses[0].state);
  }, [isSuccess, res]);

  const submit = async (e) => {
    if (res?._embedded == undefined) {
      // ! post address
      axios.post(
        `http://localhost:8080/api/addresses/`,
        {
          street,
          number,
          city: location,
          state: contact,
          country: floor,
          zipCode: postalCode,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }

    // ! put name email
    await axios.put(
      `http://localhost:8080/api/users/${id}`,
      {
        name: NameAndSurname,
        email: email,
        role: "NORMAL",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res?._embedded != undefined) {
      // ! put address
      await axios.put(
        `http://localhost:8080/api/addresses/${res?._embedded?.addresses[0].id}`,
        {
          street,
          number,
          city: location,
          state: contact,
          country: floor,
          zipCode: postalCode,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }

    // if (canSave) {
    //   try {
    //     e.preventDefault();
    //     console.log("entro");
    //     await addNewDataUser(id, {
    //       name: "NUEVO NOMBRE SEBAS",
    //       email: "sebastian.gomz02@gmail.com",
    //       role: "NORMAL",
    //       password: "123456",
    //     });
    //     history.push(`/users/${id}`);
    //   } catch (error) {
    //     console.error("fail to save put ", error);
    //   }
    // }
    // // alert("Guardando");
  };

  let content;
  if (isFetching) {
    content = <Loader />;
  } else if (isSuccess) {
    content = (
      <>
        <MyDataStyle>
          <form onSubmit={submit}>
            <label htmlFor="name">Nombre y apellido</label>
            <br />
            <input
              placeholder="Ingrese su nombre y apellido"
              required
              type="text"
              id="name"
              onChange={(e) => setNameAndSurname(e.target.value)}
              value={NameAndSurname}
            />
            <br />
            <div className="postalCode_location">
              <label htmlFor="postalCode">Codigo postal</label>
              <div className="location">
                <label htmlFor="location">Localidad</label>
              </div>
            </div>
            <input
              required
              placeholder="Ingrese el codigo postal"
              type="text"
              id="postalCode"
              onChange={(e) => setPostalCode(e.target.value)}
              value={postalCode}
            />
            <input
              required
              placeholder="Ingrese su localidad (ciudad)"
              type="text"
              id="location"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
            <br />
            <div className="address">
              <div className="street">
                <label htmlFor="street">Calle</label>
              </div>
              <div className="number">
                <label htmlFor="number">Número</label>
              </div>
              <div className="piso">
                <label htmlFor="floor">Piso</label>
              </div>
            </div>
            <input
              placeholder="Ingrese la direccion de su domicilio"
              required
              type="text"
              id="street"
              onChange={(e) => setStreet(e.target.value)}
              value={street}
            />
            <input
              placeholder="Ingrese el numero"
              required
              type="text"
              id="number"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            />
            <input
              placeholder="Ingrese el numero"
              type="text"
              id="floor"
              onChange={(e) => setFloor(e.target.value)}
              value={floor}
            />
            <div className="contact_email">
              <label htmlFor="contact">Contacto</label>
              <div className="email">
                <label htmlFor="email">Correo electronico</label>
              </div>
            </div>
            <input
              placeholder="Ingrese su numero de telefono"
              required
              type="text"
              id="contact"
              onChange={(e) => setContact(e.target.value)}
              value={contact}
            />
            <input
              placeholder="Ingrese su correo electronico"
              required
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className="moreDetails">
              <label htmlFor="moreDetails">Aclaracion (opcional)</label>
            </div>
            <input
              placeholder="Deje una aclaracion de su domicilio aqui"
              type="text"
              id="moreDetails"
              onChange={(e) => setmoreDetails(e.target.value)}
              value={moreDetails}
            />
            <div className="button">
              <button>Guardar</button>
            </div>
          </form>
        </MyDataStyle>
      </>
    );
  }

  return content;
}
