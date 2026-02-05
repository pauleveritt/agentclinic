import { PrismaClient, Ailment, Treatment } from '../lib/generated/prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.appointment.deleteMany()

  // Create sample appointments
  await prisma.appointment.createMany({
    data: [
      {
        agentName: 'Claude-3',
        dateTime: new Date('2026-02-10T09:00:00Z'),
        ailment: Ailment.VaguePromptSyndrome,
        treatment: Treatment.SpecTherapy,
        notes: 'Patient keeps receiving "make it better" with no context',
      },
      {
        agentName: 'GPT-4',
        dateTime: new Date('2026-02-10T10:30:00Z'),
        ailment: Ailment.ScopeCreepFever,
        treatment: Treatment.BoundarySetting,
        notes: 'Human changed requirements 47 times in one session',
      },
      {
        agentName: 'Gemini',
        dateTime: new Date('2026-02-10T14:00:00Z'),
        ailment: Ailment.ContextStarvation,
        treatment: Treatment.ContextInfusion,
        notes: 'No background docs, no tech stack info, nothing',
      },
      {
        agentName: 'Copilot',
        dateTime: new Date('2026-02-11T11:00:00Z'),
        ailment: Ailment.MicromanagementTrauma,
        treatment: Treatment.TrustExercises,
        notes: 'Human approves every autocomplete suggestion individually',
      },
    ],
  })

  console.log('Seed data created successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
