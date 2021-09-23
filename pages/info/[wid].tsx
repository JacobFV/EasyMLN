import DefaultLayout from "../../components/defaultLayout";
import InfoModal from "../../components/infoModal";

import { db } from './../../lib/initFirebase'

import { useRouter } from 'next/router'
import { getDoc, doc } from "firebase/firestore"

export default function Info() async {

    const router = useRouter()
    const wid = router.query.wid

    const workflowRef = doc(db, "workflos", `${wid}`)
    const workflowSnap = await getDoc(workflowRef)
    const workflow = workflowSnap.data()

    return <DefaultLayout>
        <InfoModal workflow={workflow} />
    </DefaultLayout>
}