// sanity/schemas/appointment.ts

export default {
  name: 'appointment',
  type: 'document',
  title: 'Appointment',
  fields: [
    {
      name: 'patientName',
      type: 'string',
      title: 'Patient Name',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Patient Email',
    },
    {
      name: 'doctorName',
      type: 'string',
      title: 'Doctor Name',
    },
    {
      name: 'doctorPhone',
      type: 'string',
      title: 'Doctor WhatsApp Number',
    },
    {
      name: 'date',
      type: 'date',
      title: 'Appointment Date',
    },
    {
      name: 'time',
      type: 'string',
      title: 'Appointment Time',
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Confirmed', value: 'confirmed' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
    },
  ],
}
