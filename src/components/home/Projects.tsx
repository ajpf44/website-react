import { JSX } from "react";
import { Box, Text, Wrap } from "@chakra-ui/react";

import ProjectBox from "./ProjectBox";
// import fotoPerfil from "../assets/foto-perfil.webp";
import projectLayout from "@/types/projectLayout";

import projectsJSON from "../../data/projects.json"

const projects: projectLayout[] = Object.values(projectsJSON);

function Projects(): JSX.Element {
	return (
		<Box textAlign={"justify"} spaceY="1rem">
			<Text textStyle="xl">Meus Projetos:</Text>
			<Wrap gap="2rem">
				{projects.map((p, i) => (
					<ProjectBox
						imgPath={p.imgPath}
						name={p.name}
						description={p.description}
						link={p.link}
						key={i}
						techs={[]}
					/>
				))}
			</Wrap>
			<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe, error adipisci animi suscipit molestiae. Nulla laborum sapiente aspernatur, accusamus omnis sunt et tempore, provident alias nobis aliquid dolorum itaque.
			Blanditiis harum dolores labore, dolor sequi repellat quo ullam optio unde nisi omnis veniam ratione hic esse vitae accusantium ipsum eligendi eum consequuntur! Voluptatem voluptas iste fuga, cum ea aut.
			Iste asperiores, vel dignissimos officiis ipsum corrupti eum incidunt ex recusandae ab? Autem maiores nesciunt enim doloremque perspiciatis in dolore harum itaque provident, repudiandae recusandae incidunt voluptatum temporibus quas officiis.
			Itaque, nobis tenetur porro dolor labore ratione optio quo alias? Quaerat consequuntur quasi illo quia temporibus, omnis quo fugit voluptate! Sequi quasi praesentium animi odit enim, sed libero fugit soluta!
			Aliquam animi minima iure debitis facilis quisquam, fugiat dolorum accusamus cupiditate temporibus incidunt iusto eius odit eligendi placeat reiciendis molestias a! Dolorem magni facere, quas perspiciatis qui asperiores facilis quis?
			Voluptates temporibus neque numquam ipsum blanditiis corrupti, ipsam, eaque nihil ex provident quaerat molestiae dignissimos adipisci rem cum doloremque perspiciatis assumenda optio? Dolor excepturi fugit mollitia tempore aut ea rem.
			Autem sunt ipsa exercitationem quam sint quidem accusantium veritatis veniam nihil doloremque saepe, ipsam quae, sequi ut tenetur fugit architecto! Provident quam fuga nisi harum excepturi sunt esse ea pariatur!
			Hic tempora voluptatibus eius voluptatum provident, blanditiis, iure iste, id nobis ipsam nesciunt molestias. Exercitationem consequuntur qui mollitia magnam distinctio doloribus quasi similique voluptas illum ab fuga, vitae maiores ipsa?
			Dolorem mollitia dolorum aliquid possimus fugit, nostrum tempore rerum odio hic, cupiditate provident expedita harum quisquam dicta amet dignissimos. Accusantium atque placeat ipsum veniam, nihil libero iure doloremque quia dignissimos.
			Error facilis quaerat quisquam quos, ducimus magni harum! Vero perferendis alias quae voluptatibus, laudantium quaerat quibusdam, illum distinctio molestiae id ipsam ea, et debitis totam earum autem omnis voluptas accusamus.
			Quia, assumenda fuga a earum nobis nam minus cumque, eaque animi, aperiam nesciunt. Voluptatum quasi nesciunt reprehenderit molestiae dolorem obcaecati tenetur ex enim quis non voluptas totam, accusantium facilis tempora?
			Laudantium quasi quisquam commodi ut molestiae blanditiis sint velit ea quos labore tempora minima placeat consectetur, ad dignissimos nostrum voluptatum nam modi? Laborum ab cupiditate quae blanditiis molestiae. Accusantium, alias.
			At eum qui libero accusamus architecto autem. Ducimus esse explicabo delectus consequuntur est optio nesciunt, accusantium saepe, quasi ab qui impedit atque tempora cumque dolores obcaecati in libero! Impedit, consectetur!
			Quisquam eligendi autem similique vero, obcaecati magni dolor totam minus mollitia praesentium earum omnis sunt molestiae nemo. Suscipit, consequuntur molestias? Optio pariatur aspernatur earum explicabo beatae repudiandae autem magni obcaecati.
			Optio, autem numquam, nisi natus modi in adipisci consequuntur tempora molestias soluta earum corporis. Delectus fugiat ratione molestias. Aut, eaque. Tempore ea, laborum totam magnam at explicabo impedit accusantium natus.
			Numquam fugit dolorem qui mollitia eaque, magnam nihil quasi cum quos quia fugiat, necessitatibus eum eveniet modi pariatur exercitationem, enim molestiae fuga explicabo a beatae velit perspiciatis sit veniam. Hic.
			Ad vitae iure nesciunt dolores repudiandae libero ipsum, accusamus modi maiores vero laborum minima magni deserunt voluptatem unde esse ratione beatae, excepturi, quis incidunt architecto illum! Suscipit porro ipsum maiores.
			Molestiae sapiente cumque quasi assumenda ipsa est, nostrum ullam? Nostrum hic, veritatis inventore libero, quam unde voluptates corporis, possimus accusantium blanditiis cum tempora voluptatem nam architecto enim commodi voluptas totam.
			Perspiciatis quaerat necessitatibus facilis voluptate in. Expedita, non eius. A unde, mollitia nostrum obcaecati repellat illo laboriosam deleniti vero eos. Eligendi corporis adipisci, consequatur tenetur possimus hic nesciunt aliquam ullam!
			Magnam vel dicta explicabo aut quia sequi, corporis neque! Cumque nisi mollitia at porro quaerat praesentium dicta, ab minus inventore excepturi expedita nulla repellendus alias. Aperiam facilis natus minima dolor.
			Similique, eos! Error veritatis fuga aspernatur impedit expedita vero quos officiis suscipit iste repellat laboriosam perferendis accusantium non eum ratione nisi quaerat sapiente aperiam nihil assumenda incidunt, facilis voluptatibus. Consequatur.
			Totam quas repudiandae necessitatibus rem numquam deleniti laboriosam placeat, fugit nesciunt porro expedita voluptatum quia, distinctio mollitia. Inventore pariatur debitis laborum natus eum, repellat exercitationem magnam quod quam at! Neque.
			Id vel, voluptatum hic minus ratione illo quos maxime! Odio consequatur, earum facere dolorum recusandae provident minus amet quia est! Minus ab enim esse officiis numquam error molestias a. Neque!
			Quas, amet. Magnam voluptatibus repellat necessitatibus ea quasi, exercitationem natus, excepturi corporis vitae fuga incidunt ullam officia ipsum neque praesentium deserunt. Minus aliquid rerum saepe consequuntur expedita laudantium cum fugit!
			Ab facere ipsum incidunt architecto inventore numquam, voluptates tenetur quam vitae doloremque quos quisquam debitis reprehenderit consequatur animi. Quaerat incidunt corporis at quasi similique voluptatum nam veritatis enim est fugiat!
			Eligendi cupiditate ipsa odio harum sequi expedita exercitationem quae error repellendus laborum blanditiis, suscipit deserunt ipsum fugit, eaque repellat adipisci voluptas voluptate quos aut dicta facilis dolorum! Quam, minima provident.
			Recusandae odit tempore, a laboriosam suscipit odio quis eos fugiat dignissimos doloribus distinctio pariatur rerum, rem id animi? Enim fugit tenetur ullam consequatur adipisci distinctio ipsum dolorem natus ratione possimus?
			Quibusdam ad excepturi corrupti laudantium eaque! Itaque est iure modi et rem similique nam reiciendis harum ducimus assumenda aliquam dolorem a odio iste minima exercitationem facere, blanditiis commodi iusto ex!
			Consequuntur harum exercitationem temporibus sequi. Debitis ducimus expedita veritatis, voluptatum officiis ea ex rem. Accusamus, nobis aspernatur? Id cupiditate, mollitia suscipit, consequatur voluptate doloribus harum praesentium ratione voluptates odit eos?
			Deleniti, quo? Natus explicabo illo magnam optio nihil dolores magni sed obcaecati, porro omnis? Eveniet, optio corporis quia quisquam eum dolorum! Hic consequatur nam deserunt aperiam quasi quos totam vitae?
			Quidem voluptatum molestiae omnis doloremque et. Ea, libero voluptates consequatur quia earum quis ut laborum numquam sed minima, est voluptatibus? Expedita praesentium illo vel excepturi impedit natus nostrum ipsam ea.
			Quisquam quas consequatur, velit id enim qui labore repellat totam asperiores, autem, veritatis vero ipsa repellendus cumque earum nulla ut voluptas iusto odio rerum! Quam enim in fugiat totam omnis?
			Non, neque necessitatibus veniam ipsam, molestias corporis aspernatur perferendis veritatis quas nam ratione exercitationem cupiditate odio dignissimos, voluptas vitae aliquam ab? Illum aut quisquam numquam fugit qui mollitia? Non, quae!
			Exercitationem neque mollitia omnis eveniet perferendis dolorum perspiciatis quos reprehenderit? Vel nostrum quod nemo incidunt sit aliquam magni qui, tenetur ullam ab dolore commodi harum a expedita earum! Quasi, nostrum.
			Dolores ducimus exercitationem sed et doloremque, totam, alias quisquam dolor autem amet dignissimos! Ut dolorem laudantium, nostrum fuga consectetur sapiente ab quos quibusdam error repudiandae, sunt minus esse quod sed!
			Aliquam repellendus quidem necessitatibus eligendi ratione accusantium ipsa excepturi illo facere dolore consequatur totam atque vitae delectus quia eius quae iste, qui corrupti reiciendis quaerat blanditiis recusandae. Illum, fugit tempora.
			Illum non illo quisquam ipsam voluptatum delectus laboriosam est, modi et, eligendi recusandae aliquam porro quia minima neque harum asperiores aperiam nostrum. Quibusdam aliquid inventore, quo corporis dolores explicabo doloremque?
			Praesentium accusamus maxime aperiam repellat enim earum. Eligendi aliquid beatae aperiam dignissimos voluptates est? Quibusdam ex minima quae dolor quaerat dicta doloribus vero, consequatur, rem ullam illo facere eius voluptates.
			Commodi necessitatibus quasi voluptatum, eos saepe, beatae doloremque fuga cumque in maxime odit officia animi obcaecati libero atque quod quis quae sapiente debitis unde natus voluptatibus corrupti? Dolorem, ab debitis.
			Eveniet, a dicta earum magnam, numquam eligendi iure ab possimus quae, exercitationem provident. Culpa voluptates voluptas praesentium omnis dolorum neque ut rem sint consequuntur numquam ipsa nobis, distinctio sequi. Omnis.</Text>
		</Box>
	);
}

export default Projects;
