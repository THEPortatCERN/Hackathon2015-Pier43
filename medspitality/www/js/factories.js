angular.module('starter.factories', [])

.factory('ProfileFactory', function() {
    var profilesAll = [];

    profilesAll.load = function(){
	return [
	    {
		title: 'Julia Smith',
		id: 1,
    job: 'Surgery specialist',
		description: 'Julia loves cats and grounge music. She studied in London and already operated more than 200 patients.',
		pic: 'doctor_2.jpg'
	    },
	    {
		title: 'Neil Answers',
		id: 3,
    description: 'Neil is a doctor since 1987 when he graduated in Rome. He loves horse riding.',
		job: 'Back especialist',
		pic: 'doctor_1.jpg'
	    },
	    {
		title: 'Guillermina Pilla',
		id: 4,
    description: 'Guillermina has two sons that play rugby. She got her diploma in Madrid. She loves classical music.',
		job: 'Nourse',
		pic: 'nourse_1.jpg'
	    }
	]};

  profilesAll.find = function(id){
    pf = profilesAll.load();
    return pf[id];
  };

    return profilesAll;

});
