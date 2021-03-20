import { LightningElement ,api,wire} from 'lwc';

export default class VaccineDetailsCard extends LightningElement {

    @api
    myvaccine;
    mapMarkers = [{
        location: {
            Latitude: '37.790197',
            Longitude: '-122.396879'
        }
    }];

    bookNowEvent(){
        console.log('Event from Child');
      
        const msg = new CustomEvent('bookingevt', {detail: this.myvaccine})
        this.dispatchEvent(msg);
        
    }
}