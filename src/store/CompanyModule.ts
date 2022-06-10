import axios from 'axios';
import api from "@/plugins/axios";
import router from '@/router';

export default {
    state: {
        all_company: [] as any [],
        choose_company: undefined as number | undefined,
        one_company: {} as {},
        validInn: false as boolean,
    },
    mutations: {
    },
    actions: {
        getCompanies({
            commit, state
        }:any) {
          api.get('marketplace/company_for_staff/').then((response:any)=>{
              if(response.status === 200) {
                state.all_company = response.data.results
              }
          })
        },
        chooseCompany({
            commit, state
        }:any, payload:any) {
            let company = state.all_company.filter((elem:any)=> elem.id === payload)
            if(company[0].approved == true) {
                state.choose_company = payload;
            }
            else {
                alert("данная компания ещё проходит этап подтверждения")
            }
            // router.push(`/?company_id=${payload}`)
        },
        getOneCompany({
            commit, state
        }:any, payload: any) {
            // проверить на наличие возможности поменять url адресс и получить не свою компанию
            if(state.choose_company == undefined) {
                let urlParams = new URLSearchParams(window.location.search);
                state.choose_company = Number(router.currentRoute.value.params.id);
            }
            api.get(`marketplace/company/${state.choose_company}/`).then((response:any)=>{
                state.one_company = response.data
            })
        },
        createCompany({
                 commit, state
        }:any, payload:any){
            // 352605176243
            if(payload.type == 'Самозанятый') {
                // создание компании от самозанятого
                api.post('marketplace/company/',{
                    company_type: payload.company_type,
                    full_name: payload.full_name,
                    short_name: payload.short_name,
                    inn: payload.inn,
                    img: payload.img,
                    description: payload.description,
                    personal_account: payload.personal_account,
                    fact_address: payload.fact_address,
                }).then((response:any)=>{
                    console.log(response);
                })
            }else {
                api.post('marketplace/company/',{
                    // создании компании от юр.лица
                    company_type: payload.company_type,
                    full_name: payload.full_name,
                    short_name: payload.short_name,
                    inn: payload.inn,
                    img: payload.img,
                    description: payload.description,
                    checking_account: payload.checking_account,
                    name_bank: payload.name_bank,
                    bik: payload.bik,
                    correspondent_account: payload.correspondent_account,
                    legal_address: payload.legal_address,
                    orgn: payload.orgn,
                }).then((response:any)=>{
                    console.log(response);
                })
            }
        },
        checkInn({
            commit, state
            }:any, payload:any){
            axios.post(`https://htmlweb.ru/json/validator/inn/${payload}`).then((response:any)=>{
                if(response.data.status == 200) {
                    state.validInn = true;
                }
                else{ state.validInn = false }
            })
        },        
        // test function and check
    },
    modules: {
    },
    namespaced: true,
  }
  