import React from "react";

export default function useAuth() {
    
  let token = localStorage.getItem("token");



  return token ? true : false;
}
