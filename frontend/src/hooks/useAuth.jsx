import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const useDisplacement = () => {
  const { role } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    switch (role) {
      case 'ADMIN':
        navigate('/'); //TODO: change to admin page
        break;
      case 'NORMAL':
        navigate('/');
        break;
      case '':
        navigate('/login');
        break;
      default:
        break;
    }
  }, [])

	return {
    role
	};
};

export default useDisplacement;
