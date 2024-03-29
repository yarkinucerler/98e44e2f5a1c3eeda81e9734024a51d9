import React, {useEffect} from 'react';
import {useRouter} from "next/router";

export default function Page() {
  const router = useRouter()
  useEffect(() => {
    router.push('/program/futbol')
  }, []);
}
