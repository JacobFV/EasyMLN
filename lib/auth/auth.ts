import Workflow from '../../types/workflow';
import { anonymous_animals } from './_anonymous_animals';


export function getUid(): nubmer {
    let id = firebase.auth().currentUser.uid

    return UserId(id, loggedIn ? firebaseUserName : `Anonymous + ${anonymous_animals[id]}`);
    /*if (loggedIn) {

    } else {
        //let id = randomInt(0, 100000); 
        // maybe get temp id from firebase
        // firebase can make sure that the id is unique and preserved across pages
        return new UserId(id, `Anonymous + ${anonymous_animals[id]}`);
    }*/
}

export function canEditWorkflow(workflow: Workflow): boolean {
    if(getUid() == workflow.ownerUid) { return true }
    else { return workflow.publicCanEdit }
}